import { connect } from "react-redux";
import PackageWarehouse from "../Component/PackageWarehouse/PackageWarehouse";
import MiniPackageResouce from "../Resources/MiniPackageResouce";
import MainPage from "../Component/MainPage/MainPage";

const mapStateToProps = state => ({
    packageList: state.packageList,
    filterType: state.filterType
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
        
    },
    
    refreshContent: (contentList) =>
    dispatch({
        type: "REFRESH",
        payload: contentList
    }),
    
    filterTypeChanged: (filterType) =>
    dispatch({
        type: "CHANGE_FILTER_TYPE",
        payload: filterType
    }),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)