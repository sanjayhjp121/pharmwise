import Chat from "./Chat/Chat";
import SmallCarousal from "./SmallCarousal";

const brand_array = [
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fccafd09-569d-419d-b65a-84b6d314295a.png",
    title: "Cetaphil",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e657a4c7-8cee-4eb6-850f-e48d1dd1288c.png",
    title: "Mamaearth",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/21c4a8bf-2e3a-42a1-83e9-6ef63e760f88.png",
    title: "Dabur",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f28e82bd-37ec-4891-8eb7-69486635a199.png",
    title: "mCaffeine",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/eba5fb6b-6baa-4bc0-b030-793645a2ee4e.png",
    title: "Nivea",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f142c987-e7aa-48da-90b3-306cd90ea1c9.png",
    title: "Accu-Chek",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1e9dae18-a318-405b-b97f-36c3c1e9b9e4.png",
    title: "Protinex",
  },
];

const popular_categories = [
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b3fcf5ba-ae5e-4c94-a43f-e381cd27d5ab.webp",
    title: "Top Deals",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba7328d6-022b-45fe-b87a-1f1fbead2789.png",
    title: "Winter Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f5fb69f7-cf7a-4e7c-ba48-b924c7b5111c.png",
    title: "Nutritional Drinks",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5adb8954-6264-46d7-8136-cb5a633b7535.png",
    title: "Ayurveda",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/15e1ce5f-798f-4aa7-b6b4-1b140c4d6f4d.webp",
    title: "Sexual Wellness",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/668f0b65-56ef-4875-8aef-9a53b919b53c.webp",
    title: "Vitamins & Supplements ",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/de1183ce-6b14-4549-9fda-f732d96a11de.webp",
    title: "Skin Care ",
  },
];

const Data = () => {
  return (
    <main>
      <div className="shopHealth">
        <div className="caption">
          <h3>Featured Brands</h3>
        </div>
        <SmallCarousal data={brand_array} />
      </div>
      <div className="shopHealth">
        <div className="caption">
          <h3>Popular Categories</h3>
        </div>
        <SmallCarousal data={popular_categories} />
      </div>
      <div className="consultDoctor">
        <div className="caption">
          <h3>Popular Doctors</h3>
        </div>
        <Chat/>
      </div>
    </main>
  );
};

export default Data;