import Hero from "@/components/sections/Hero";
import Hook from "@/components/sections/Hook";
import Story from "@/components/sections/Story";
import Audience from "@/components/sections/Audience";
import ReadExcerpt from "@/components/sections/ReadExcerpt";
import Testimonials from "@/components/sections/Testimonials";
import WhySpecial from "@/components/sections/WhySpecial";
import Author from "@/components/sections/Author";
import Purchase from "@/components/sections/Purchase";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hook />
      <Story />
      <Audience />
      <ReadExcerpt />
      <Testimonials />
      <WhySpecial />
      <Author />
      <Purchase />
      <Closing />
    </main>
  );
}
