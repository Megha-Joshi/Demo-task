import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {
    db
} from "../firebase-config";
import {collection, getDocs, doc, deleteDoc, addDoc} from "firebase/firestore";

const ItemContext = createContext();

const ItemProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [singleItem, setSingleItem] = useState({
        name: "",
    })

    const itemCollectionRef = collection(db, "items");

    useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(itemCollectionRef);
            setItems(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        };
        getItems();

    }, []);

    const createItem = async () => {
        const docRef = await addDoc(itemCollectionRef, {
            name: singleItem.name,
        });
        setItems((val) => [
            ...val,
            {
                id: docRef.id,
                name: singleItem.name,
            },
        ]);
        setSingleItem({
            name: "",
        });
    };

    const deleteItem = async (id) => {
        const selectedDocRef = doc(db, "items", id);
        await deleteDoc(selectedDocRef);
        const itemsAfterDelete = items.filter((task) => task.id !== id);
        setItems(itemsAfterDelete);
    };

    return <ItemContext.Provider value = {{
            items,
            setItems,
            singleItem,
            setSingleItem,
            createItem,
            deleteItem
        }} > {children} </ItemContext.Provider>}

const useItem = () => useContext(ItemContext);

export {useItem, ItemProvider};