import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/app/models/User'
import Payment from '@/app/models/Payment'
import connectDB from '@/app/db/ConnectDb'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider == "github" || account.provider == "google") {
      try {
// connect to database
    await connectDB();
     // check user existance in database
     const currentUser = await User.findOne({emai: email})
     console.log(currentUser)

     if(!currentUser){
      const newUser = new User({
        email: user.email,
        username: user.email.split('@')[0],
      })
      await newUser.save()
      user.name = newUser.username
      console.log(newUser)
     }
     else {
      user.name = currentUser.username
     }
     return true;
      } catch (error) {
        console.log(`Error message: ${error.message}`);
        return false;
      }
      
    }
    return true
  },

  async session({ session , user, token}) {
    await connectDB();
    const dbUser = await User.findOne({email: session.user.email});
    if(dbUser){
      session.user.name = dbUser.username;
    }
    return session;
  },
}
})

export { authoptions as GET, authoptions as POST }