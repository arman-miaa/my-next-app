"use client"

import { useRouter } from "next/navigation";



const HomePage = () => {

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard")
  }

  return (
    <div className="text-center flex items-center justify-center flex-col gap-4 min-h-screen">
      <h1 className="text-4xl">Welcome to Next js Home Page</h1>
    
        <button onClick={handleNavigation}>Dashboard</button>
    </div>
  );
};

export default HomePage;