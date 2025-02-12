import React from 'react'

const Create = () => {
  return (
  <>
    <h2>Create</h2>
    <form>
    <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </>
  )
}

export default Create