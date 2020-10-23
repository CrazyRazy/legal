import React from "react";

function RoleForm(props) {

    return (
        <form className="custom-validation" onSubmit={props.onSubmit}>
            <div className="form-group">
                <label htmlFor="roleType">Role Type</label>
                <input type="text" className="form-control" required name="roleType" onChange={props.onChange}
                       value={props.role.roleType}/>
            </div>

            <div className="form-group">
                <label>Textarea</label>
                <div>
                    <textarea name="roleDescription" required className="form-control" rows="5" onChange={props.onChange} value={props.role.roleDescription}> </textarea>
                </div>
            </div>
            <div className="form-group mb-0">
                <div>
                    <button type="submit" value="save" className="btn btn-primary waves-effect waves-light mr-1">
                        Submit
                    </button>
                    <button type="reset" className="btn btn-secondary waves-effect">
                        Cancel
                    </button>
                </div>
            </div>
        </form>

    )

}

export default RoleForm;