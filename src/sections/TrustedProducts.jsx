import { portfolio } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ProductLogoCard from "../components/ProductLogoCard";

const TrustedProducts = () => {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Trusted Products"
          subtitle="Products and brands I've designed and developed across fintech, agriculture and technology."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {portfolio.trustedProducts.map((product) => (
            <ProductLogoCard
              key={product.name}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedProducts;