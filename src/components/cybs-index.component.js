import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

export default class CybsIndex extends Component{
    constructor(props){
        super(props);
        this.state={
            access_key:"<--  YOUR ACCESS KEY  -->",
            profile_id:"<--  YOUR PROFILE ID  -->",
            amount:'',
            currency:'',
            locale:"en",
            payment_method:"card",
            refrence_number:uuidv4(),
            signed_date_time:'',
            signed_field_names:[
                "access_key",
                "amount",
                "currency",
                "locale",
                "payment_method",
                "profile_id",
                "reference_number",
                "signed_date_time",
                "signed_field_names",
                "transaction_type",
                "transaction_uuid",
                "unsigned_field_names"
              ],
            transaction_type:'sale',
            transaction_uuid:uuidv4(),
            unsigned_field_names:'',
            signature:''    ,
            customerIp:"127.0.0.0"
        }
        this.onChangeAmount=this.onChangeAmount.bind(this)
        this.onChangeCurrency=this.onChangeCurrency.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChangeAmount(e){
        e.preventDefault();
        this.setState({
            amount:e.target.value
        })
    }
    onChangeCurrency(e){
        e.preventDefault();
        this.setState({
            currency:e.target.value
        })
    }

    onSubmit(e){
        const fields=[
            {name: "access_key",value:this.state.access_key},
            {name: "locale", value:this.state.locale},
            {name: "payment_method",value:this.state.payment_method},
            {name: "profile_id",value:this.state.profile_id},
            {name: "signature",value:this.state.signature},
            {name: "signed_date_time",value:this.state.signed_date_time},
            {name: "signed_field_names",value:this.state.signed_field_names},
            {name: "transaction_type",value:this.state.transaction_type},
            {name: "transaction_uuid",value:this.state.transaction_uuid},
            {name: "unsigned_field_names",value:this.unsigned_field_names},
            {name: "reference_number",value:this.state.refrence_number},
            {name: "amount",value:this.state.amount},
            {name: "currency",value:this.state.currency}
        ]

        const item={
            access_key:this.state.access_key,
            locale:this.state.locale,
            payment_method:this.state.payment_method,
            profile_id:this.state.profile_id,
            signature:this.state.signature,
            signed_date_time:this.state.signed_date_time,
            signed_field_names:this.state.signed_field_names,
            transaction_type:this.state.transaction_type,
            unsigned_field_names:this.state.unsigned_field_names,
            reference_number:this.state.reference_number,
            amount:this.state.amount,
            currency:this.state.currency
        }
        console.log(fields);
        axios.post('http://localhost:9000/hasher',item).then(res=>{
            this.props.history.push('/confirm',{
                access_key:res.data.access_key,
                locale:res.data.locale,
                payment_method:res.data.payment_method,
                profile_id:res.data.profile_id,
                signature:res.data.signature,
                signed_date_time:res.data.signed_date_time,
                signed_field_names:res.data.signed_field_names,
                transaction_type:res.data.transaction_type,
                transaction_uuid:res.data.transaction_uuid,
                unsigned_field_names:res.data.unsigned_field_names,
                reference_number:res.data.reference_number,
                amount:res.data.amount,
                currency:res.data.currency
                });
        })
    }
    render(){
        
        return(
            <div style={{padding:"20%",paddingTop:"5%"}}>
                <hr/>
                <div className="form-group">
                    <h3>CyberSourc-SAHC Raw Sample Code</h3>
                    <div style={{backgroundColor:"whitesmoke",height:"100px"}}>
                        <p>Amount: {this.state.amount }</p>
                        <p>Currency: {this.state.currency }</p>
                    </div>
                    <br />
                    <input type="hidden" name="access_key" value={this.state.access_key}/>
                    <input type="hidden" name="locale" value="en-US" />
                    <input type="hidden" name="payment_method" value="card" />
                    <input type="hidden" name="profile_id" value={this.state.profile_id} />
                    <input type="hidden" name="signature" />
                    <input type="hidden" name="customer_ip_address" value={this.state.customerIp} />
                    <input type="hidden" name="signed_date_time"/>
                    <input type="hidden" name="signed_field_names"  value={this.state.signed_field_names} />
                    <input type="hidden" name="transaction_type" value="sale" />
                    <input type="hidden" name="unsigned_field_names" value={this.state.unsigned_field_names} />
                    <input type="hidden" name="reference_number" value={this.state.refrence_number} />
                    <input type="hidden" name="transaction_uuid" value={this.state.transaction_uuid} />
                    <input  className="form-control"
                            type="number"
                            name="amount"
                            required
                            value={this.state.amount}
                            onChange={this.onChangeAmount}
                            />
                    <br/>
                    <input  className="form-control"
                            type="text"
                            name="currency"
                            value={this.state.currency}
                            onChange={this.onChangeCurrency}
                            />
                </div>
                <br/>
                    <button  className="btn btn-success mb-2"
                            onClick={this.onSubmit}
                            >Submit</button>
                <hr />
            </div>
        )
    }
}