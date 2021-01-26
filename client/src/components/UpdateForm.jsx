import React from 'react';
import '../App.css';

const UpdateForm = props => {
    return(
        <>
        <form onSubmit={props.onSubmitHandler}>
            <div className="half_div">
                <h3>General: </h3>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="name">Pet Name: </label>
                            <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
                            {
                                props.error.name ? 
                                <p className="text-danger">{props.error.name.message}</p>:""
                            }
                            {
                                props.dupeError !== "" ?
                                <p className="text-danger">{props.dupeError}</p>:""
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Pet Type: </label>
                            <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type}/>
                            {
                                props.error.type ? 
                                <p className="text-danger">{props.error.type.message}</p>:""
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Pet Description: </label>
                            <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                            {
                                props.error.description ? 
                                <p className="text-danger">{props.error.description.message}</p>:""
                            }
                        </div>
                    </div>
                </div>
            </div>{/* END LEFT */}
            <div className="half_div">
                <h3>Skills: (optional)</h3>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="skillOne">Skill One</label>
                            <input type="text" name="skillOne" className="form-control" onChange={props.onChangeHandler} value={props.form.skillOne}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="skillTwo">Skill Two</label>
                            <input type="text" name="skillTwo" className="form-control" onChange={props.onChangeHandler} value={props.form.skillTwo}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="skillThree">Skill Three</label>
                            <input type="text" name="skillThree" className="form-control" onChange={props.onChangeHandler} value={props.form.skillThree}/>
                        </div>
                    </div>
                </div>
            </div>{/* END RIGHT */}
            <div className="manual_row" style={{width: "100%"}}>
                <input type="submit" className="btn btn-primary" value="Go!"/>
            </div>
        </form>
        </>
    );
}

export default UpdateForm;