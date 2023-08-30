import React from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

export default function Audio() {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    React.createElement('div', null,
      React.createElement(AudioRecorder, {
        onRecordingComplete: (blob) => addAudioElement(blob),
        recorderControls: recorderControls,
        // downloadOnSavePress: true,
        // downloadFileExtension: "mp3",
        showVisualizer: true,
      }),
      React.createElement('br', null),
      React.createElement('button', { onClick: recorderControls.stopRecording }, 'Stop recording'),
      React.createElement('br', null)
    )
  );
}
