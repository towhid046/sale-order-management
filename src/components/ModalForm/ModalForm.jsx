import Select from "react-select";
import PropTypes from "prop-types";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ModalForm = ({ handleAddOrderToggle, isToggle }) => {
  return (
    <section
      className={`${
        isToggle ? "flex" : "hidden"
      } min-h-screen top-0 z-50 w-full flex justify-center items-center fixed bg-black bg-opacity-50`}
    >
      <div className="max-w-2xl relative mx-auto bg-white p-10 rounded ">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Close"
          className="absolute right-5 top-5 "
        >
          <button
            className="text-xl font-semibold hover:text-green-500 py-1 px-3 bg-gray-800 rounded transaction duration-300 text-white"
            onClick={handleAddOrderToggle}
          >
            X
          </button>
        </div>
        <form className="mt-5 text-black">
          <div>
            <label className="label">
              <strong className="label-text">Email address</strong>
            </label>
            <Select isMulti options={options} />
          </div>

          <div className="relative mt-2">
            <label className="label">
              <strong className="label-text">Password</strong>
            </label>
            <input
              name="password"
              placeholder="Password"
              className="py-2 px-3 w-full text-gray-800 rounded focus:outline-none border focus:border-sky-400"
              required
            />
          </div>

          <div className="form-control mt-4">
            <button className="btn w-full font-semibold  text-gray-200 bg-gray-800 py-2.5 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

ModalForm.propTypes = {
  handleAddOrderToggle: PropTypes.func.isRequired,
  isToggle: PropTypes.bool.isRequired,
};

export default ModalForm;
