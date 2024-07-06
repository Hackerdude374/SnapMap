// src/components/NewEntryModal.tsx
import React from 'react';

const NewEntryModal: React.FC = () => {
  return (
    <div className="modal fade" id="newentry" tabIndex={-1} role="dialog" aria-labelledby="newentryLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newentryLabel">New Entry</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <label htmlFor="feeling">Write something about photo</label>
            <input type="text" id="feeling" name="feeling" />
            <hr />
            <input type="file" name="photo" accept="image/*" capture />
            <hr />
            <canvas id="capturedImg" width="240" height="320"></canvas>
            <div id="position_info" style={{ padding: '10px' }}></div>
            <div className="progress" style={{ display: 'none' }}>
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '0%' }} id="imgprogressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Post!!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEntryModal;
