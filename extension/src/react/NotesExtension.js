import React from 'react';


class NotesExtension extends React.Component {

  render() {
    const {notes} = this.props;

    return(
      <div>
        <h1>React notes extension</h1>
        {notes.map((note, index) => {
          return <div key={note}>
            <span>{(index + 1)}: </span>
            <span>{note}</span>
          </div>
        })}
      </div>
    )
  }

}

export default NotesExtension;
