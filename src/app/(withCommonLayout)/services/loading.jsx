import Container from "@/components/shared/Container";
import React from "react";
import ServiceCardSkeleton from "./_components/ServiceCardSkeleton";

const loading = () => {

  return (
    <div className="py-7">
      <Container>
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(10)]?.map((_ , ind) => {
            return <ServiceCardSkeleton key={ind} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default loading;
