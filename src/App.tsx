import Hero from "./components/Hero/Hero.tsx";
import styles from "./App.module.css"
import Text from "./components/Text/Text.tsx";
import Shedule from "./components/Shedule/Shedule.tsx";
import Flower from "./components/Flower/Flower.tsx";
import Address from "./components/Address/Address.tsx";
import Timer from "./components/Timer/Timer.tsx";
import Form from "./components/Form/Form.tsx";

function App() {
    return (
        <div className={styles.container}>
            <Flower>
                <Hero />
            </Flower>

            <Flower>
                <Text />
            </Flower>

            <Flower>
                <Shedule />
            </Flower>

            <Flower>
                <Timer />
            </Flower>

            <Flower>
                <Address />
            </Flower>

            <Flower>
                <Form />
            </Flower>
        </div>
    );
}

export default App;