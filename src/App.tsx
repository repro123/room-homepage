import MobileHeader from "@/components/Header";
import AboutOurFurniture from "@/components/AboutOurFurniture";

function App() {
  return (
    <>
      <section>
        <MobileHeader />
      </section>

      <section className="grid lg:grid-cols-3">
        <div></div>

        <AboutOurFurniture />

        <div></div>
      </section>
    </>
  );
}

export default App;
