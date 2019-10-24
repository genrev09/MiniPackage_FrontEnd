import { connect } from "react-redux";
import PackageWarehouse from "../Component/PackageWarehouse/PackageWarehouse";

const mapStateToProps = state => ({
    packageList: state.packageList
});

const mapDispatchToProps = dispatch => ({

    addPackage: (_package) =>{
        dispatch({
          type: 'ADDPACKAGE',
          payload: _package
        })
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageWarehouse)