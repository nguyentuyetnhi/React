
 import React from 'react';
import {
    Button,
    Form, Input, Label
} from 'reactstrap';

const Contact = () => {
    return (
        <div className='container rounded mt-5' style={{ backgroundColor: "#918fc0" }}>

            <Form className='row container'>
                <div className='col-sm-6'>
                    <Label htmlFor="">Book title</Label>
                    <Input type="text" id="title" name="title"
                    />

                </div>
                <div className='col-sm-6'>
                    <Label htmlFor="username">Price</Label>
                    <Input type="text" id="username" name="username"
                    />

                </div>
                <div className='col-sm-6 mb-3'>
                    <Label htmlFor="username">Publish Date</Label>
                    <Input type="text" id="username" name="username"
                    />

                </div>

                <div className='col-sm-6 mb-3'>
                </div>

                <div className='d-flex justify-content-end'>
                    <Button className=' col-2 m-3' style={{ backgroundColor: "#020083", padding:'20px' }} type="reset" value="submit" >Cancel</Button>
                    <Button className='col-2 m-3' style={{ backgroundColor: "#020083" }} type="submit" value="submit" color="primary">Login</Button>

                </div>
            </Form>
        </div>

    )


}
export default Contact;

