import API from '../services/api';

function Food(){
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try{
                const { data } = await API.get("/food");
                setFoods(data);
            }catch(error){
                console.error("Error fetching foods", error);
            }
        };

        fetchFoods();
    },[]);

    return(
        <div>
            <h1>j</h1>
        </div>
    );
}

export default Food;