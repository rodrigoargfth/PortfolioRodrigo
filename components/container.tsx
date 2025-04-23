"use client";

interface ContainerPageProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const ContainerPage = ({ children, className = "" }: ContainerPageProps) => {
    return (
      <div
        className={`w-full max-w-6xl px-4 mx-auto md:px-6 mt-40 pb-40 md:pb-0 ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export default ContainerPage;