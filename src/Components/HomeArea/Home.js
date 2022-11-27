
const Home = () =>
{
    return <>
        <h1>Find the perfect budget Computers Configuration</h1>
        <br />
        <form>
            <label>Please enter your budget</label>
            <input className="    form-control
        block
        w-50%
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-900
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none
      " type="number" />
            <br />
            <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Find</button>
        </form>
    </>
}
export default Home;