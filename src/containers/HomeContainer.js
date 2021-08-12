import Home from "../components/Home";
import {connect} from 'react-redux';
import {addtocart} from '../Services/Actions/Actions';

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addtocart(data))
});

const mapStateToProps= state =>({
    cartData:state

});
export default connect(mapStateToProps,mapDispatchToProps)(Home);