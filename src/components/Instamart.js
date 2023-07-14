import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  const Button = () => {
    return !isVisible ? (
      <button
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Show
      </button>
    ) : (
      <button
        onClick={() => {
          setIsVisible(false);
        }}
      >
        Hide
      </button>
    );
  };
  return (
    <div className="bg-red-200 mt-6 border border-black m-4 p-5">
      <h1 className="text-2xl">{title}</h1>
      <Button />
      {isVisible && <p className="">{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState();
  return (
    <div>
      <main>
        <h1 className="font-bold text-5xl bg-red-400">Instamart Section</h1>
      </main>
      <Section
        title={"About"}
        desc={"this is about section"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection("about");
        }}
      />
      <Section
        title={"Carrear"}
        desc={"this is all aobut carrer section"}
        isVisible={visibleSection === "care"}
        setIsVisible={() => {
          setVisibleSection("care");
        }}
      />
      <Section
        title={"History"}
        desc={"this section Historycal"}
        isVisible={visibleSection === "history"}
        setIsVisible={() => {
          setVisibleSection("history");
        }}
      />
    </div>
  );
};

export default Instamart;
