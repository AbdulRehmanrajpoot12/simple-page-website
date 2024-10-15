import cssStyle from "./hero.module.css";

const HeroPage = () => {
    return (
        <div className={cssStyle.body}>
            <h1 className={cssStyle.h1}>Welcome to <span className={cssStyle.span}>My Website</span></h1>

            <p className={cssStyle.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum praesentium minus aliquam porro? Recusandae eos labore nulla voluptatibus at illo ratione ad nobis! Quo iste deserunt aut nisi fuga.</p>
            
            <button className={cssStyle.button}>Learn more</button>
        </div>
    )
}

export default HeroPage;