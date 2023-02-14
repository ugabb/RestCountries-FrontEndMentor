import { AiOutlineSearch } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  // getByCountryName: Function;
  setContryName: Function;
};

interface IFormInput {
  country: string;
}

const Search = ({setContryName}: Props) => {


  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setContryName(data.country)
  };

  return (
    <form
      onChange={handleSubmit(onSubmit)}
      className="my-5 mx-5 lg:w-1/2 flex bg-[#2b3945] items-center justify-start rounded-lg  px-10 py-2 gap-4"
    >
      <AiOutlineSearch className="text-white w-6 h-6" />
      <input
        {...register("country")}
        type="text"
        placeholder="Search for a country"
        className="bg-[#2b3945] py-1 w-full text-white"
      />
    </form>
  );
};

export default Search;
