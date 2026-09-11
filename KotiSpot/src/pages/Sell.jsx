import { Link } from "react-router-dom";
const Sell = () => {
    return (
        <div>
            <h1>Sell or rent out your property</h1>
            <h3>Create and manage property listings after becoming an approved seller or real-estate agent.</h3>
            <h1>How it works</h1>
            <div>
                <h3>1-Submit your application</h3>
                <h4>Choose whether you are applying as a private seller or a real-estate agent.</h4>
            </div>
            <div>
                <h3>2-Administrator review</h3>
                <h4>An administrator checks the application and approves or rejects it.</h4>
            </div>
            <div>
                <h3>3-Create your listings</h3>
                <h4>After approval, list properties for sale or rent and manage them from your account.</h4>
            </div>
            <h2>Ready to list a property?</h2>
            <h4>Your account must be approved before you can create or manage listings.</h4>
            
            <div>
                <Link to = "/applicationform">
                    <button>
                        Apply for a seller or a real-estate agent position
                    </button>
                </Link>
            </div>
            <div>        
                <Link to = "/sellerdashboard">    
                    <button>
                        Just for now
                    </button>
                </Link>   
            </div> 

        </div>
    );
};

export default Sell;