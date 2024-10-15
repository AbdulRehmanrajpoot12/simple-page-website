import cssStyle from "./header.module.css";

const HeaderPage = () => {
    return (
        <div className={cssStyle.body}>
            <h1 className={cssStyle.h1}>Welcome.</h1>
        </div>
    );
};

export default HeaderPage;