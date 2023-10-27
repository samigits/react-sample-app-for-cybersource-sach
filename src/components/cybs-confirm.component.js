import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

export default class CyberConfirm extends Component{

    constructor(props){
        super(props);
        this.state={
            transaction_type:'sale',
            locale:'en',
            signed_field_names:"access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency",
            unsigned_field_names:"",

            access_key:'',
            profile_id:'',
            transaction_uuid:'',
            reference_number:'3942263',
            signed_date_time:null,
            signature:'',

            amount:'',
            currency:''
        }
        
        this.onChangeDate=this.onChangeDate.bind(this);


    }




    onChangeAccesskey(e){
        this.setState({
            access_key:e.target.value
        })
    }

    onChangeProfileID(e){
        this.setState({
            profile_id:e.target.value
        })
    }

    onChangeAmount(e){
        this.setState({
            amount:e.target.value
        })
    }

    onChangeCurrency(e){
        this.setState({
            currency:e.target.value
        })
    }

    onChangeTransactionUuid(e){
        this.setState({
            transaction_uuid:e.target.value
        })
    }
    onChangeReferenceNum(e){
        this.setState({
            reference_number:e.target.value
        })
    }
    onChangeDate(e){
        this.setState({
            signed_date_time:e.target.value
        })
    }


    render(){
        console.log("accdkjdf: "+this.state.access_key);
        return(
            <div>
            <form id="payment_confirmation" action="https://testsecureacceptance.cybersource.com/pay" method="post"  >
                <hr/>
                <div className="form-group">
                    <h3>CyberSourc-SAHC Raw Sample Code</h3>
                    <input  className="form-control" 
                            type="text" 
                            name="access_key"
                            required
                            value={this.props.location.state.access_key}
                            onChange={this.onChangeAccesskey}
                    />
                    <input  className="form-control"
                            type="number"
                            name="amount"
                            required
                            value={this.props.location.state.amount}
                            onChange={this.onChangeAmount}
                            />
                    <input  className="form-control"
                            type="text"
                            name="currency"
                            value={this.props.location.state.currency}
                            onChange={this.onChangeCurrency}
                            />
                    <input  className="form-control" 
                            type="text" 
                            name="payment_method"
                            required
                            value={this.props.location.state.payment_method}
                            onChange={this.onChangeCurrency}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="locale"
                            required
                            value={this.props.location.state.locale}
                            onChange={this.onChangeCurrency}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="profile_id"
                            required
                            value={this.props.location.state.profile_id}
                            onChange={this.onChangeProfileID}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="transaction_uuid"
                            required
                            value={this.props.location.state.transaction_uuid}
                            onChange={this.onChangeTransactionUuid}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="signed_field_names"
                            required
                            value={this.props.location.state.signed_field_names}
                            onChange={this.onChangeCurrency}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="unsigned_field_names"
                            value={this.props.location.unsigned_field_names}
                            onChange={this.onChangeCurrency}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="signed_date_time"
                            required
                            value={this.props.location.state.signed_date_time}
                            onChange={this.onChangeDate}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="transaction_type"
                            required
                            value={this.state.transaction_type}
                            onChange={this.onChangeCurrency}
                    />
                    <input  className="form-control" 
                            type="text" 
                            name="reference_number"
                            required
                            value={this.props.location.state.reference_number}
                            onChange={this.onChangeReferenceNum}
                    />
                    <br/>
                    
                    <input className="form-control"
                           type="text"
                           name="signature"
                           value={this.props.location.state.signature}
                           /> 
                </div>
                <br/>
                    <input  className="btn btn-success mb-2"
                            type="submit"
                            id="submit"
                            value="Confirm"
                            
                            />
                <hr />
            </form>
        </div>
        )
    }
}