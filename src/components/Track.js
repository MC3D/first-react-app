import React from 'react';

function Track (props){
  return(
    <div>
      <p>
        <button className="btn btn-warning" type="button" aria-expanded="false" aria-controls="collapseExample">
          {props.track}
        </button>
      </p>
    </div>
  );
}

export default Track;
