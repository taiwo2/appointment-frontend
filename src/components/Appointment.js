import React from 'react'

const Appointment = () =>{
  return (
    <div className="container">
       <header className="jumbotron">
        {loading && <span className="spinner-border spinner-border-lg" />}
        {
          doctor && (
          <div>
            <p>
              Appointment Id: &nbsp;
              {content.id}
            </p>
            <p>
              With &nbsp;
              <Link to={`/doctors/${doctor.id}`}>
                {doctor.name}
              </Link>
            </p>
            <p>
              On &nbsp;
              {new Date(content.appointment_date).toUTCString()}
            </p>
            <button className="btn btn-primary btn-block" type="button" onClick={handleClick} disabled={loading}>
              Delete
            </button>
          </div>
          )
        }
        {
          error && <p>{content}</p>
        }
      </header>
      
    </div>
  )
}

export default Appointment
