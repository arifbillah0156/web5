import HomeAddBiodata from "@/components/HomeAddBiodata";
import HomePageText from "@/components/HomePageText";
import HomeSearchForm from "@/components/HomeSearchForm";

export default function Home() {
  return (
    <div>
      <HomePageText />

      <HomeAddBiodata />

      <HomeSearchForm />
    </div>
  );
}
