// Supabase Configuration
// Note: Replace YOUR_SUPABASE_ANON_KEY with your actual anon key from Supabase dashboard
const supabaseUrl = "https://kzfjcloievciefxzwdtz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6ZmpjbG9pZXZjaWVmeHp3ZHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NDAzNzksImV4cCI6MjA4MDUxNjM3OX0.4HGl9w-7ezqUGyjWrKN_9WjqppbgIX3gRqjuEuF9lis";

// Create Supabase client (supabase is available globally from CDN)
const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Authentication helper functions
async function checkAuth() {
    const {
        data: { session },
        error,
    } = await supabaseClient.auth.getSession();
    if (error) {
        console.error("Error checking auth:", error);
        return null;
    }
    return session;
}

async function getCurrentUser() {
    const {
        data: { user },
        error,
    } = await supabaseClient.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user;
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error("Error signing out:", error);
        return false;
    }
    return true;
}