import NextAuth, { NextAuthOptions } from "next-auth"
import { NextApiRequest, NextApiResponse } from "next"

interface SpotifyProviderConfig {
  clientId: string
  clientSecret: string
}

interface AuthProvider<T> {
  (config: T): any; // Adjust the return type as per your needs
}

const SpotifyProvider: AuthProvider<SpotifyProviderConfig> = (config: SpotifyProviderConfig) => {
  // You can implement the SpotifyProvider function here
  // For now, let's just return a placeholder object
  return {};
};

interface AuthOptions extends NextAuthOptions {
  providers: any[]; // Adjust the type as per your needs
}

const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
    }),
    // Add more providers here
  ],
}

export default NextAuth(authOptions);
