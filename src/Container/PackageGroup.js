import { connect } from "react-redux";
import PackageWarehouse from "../Component/PackageWarehouse/PackageWarehouse";
import MiniPackageResouce from "../Resources/MiniPackageResouce";

const mapStateToProps = state => ({
    packageList: state.packageList
});

const mapDispatchToProps = dispatch => ({

    addPackage: (_package) =>{
        const newPackage = {
            packageNumber: _package.packageNumber,
            receiver: _package.receiver,
            phoneNumber: _package.phoneNumber,
            weight: _package.weight,
            status: "Waiting"
        };
        MiniPackageResouce.createPackage(newPackage).then(res => res.json()).then(({packageNumber, receiver, phoneNumber, status}) => {
            dispatch({
                type: 'ADDPACKAGE',
                payload: {packageNumber, receiver, phoneNumber, status}
            })
          })
        
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageWarehouse)