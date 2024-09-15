import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Attorney</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="Jennifer Martin Reynolds"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="Kathy JMcknight "
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="Jalme M Lemons "
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Kenneth M Kwartler Esq"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value={200}
          title="Jennifer M Reynolds"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value={200}
          title="Joseph J Quigley"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Lawrence M Jarvis"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
