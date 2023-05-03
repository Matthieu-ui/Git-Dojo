import React, { Component } from 'react'
import Terminal from 'react-console-emulator'
import {Icon} from '@iconify/react';
import { TypeAnimation } from 'react-type-animation';

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },

    clone: {
      description: 'Clone a repository into a new directory.',
      usage: 'git clone <repository>',
      fn: (repository) => `Cloning ${repository}...`
    },
    status: {
      description: 'Show the status of the working tree.',
      usage: 'git status',
      fn: () => `On branch master\n\nNo changes to commit\n\n`
    },
    add: {
      description: 'Add file contents to the index.',
      usage: 'git add <file>',
      fn: (file) => `Adding ${file} to index...`
    },
    commit: {
      description: 'Record changes to the repository.',
      usage: 'git commit -m <message>',
      fn: (message) => `Committing with message: ${message}`
    },
    push: {
      description: 'Update remote refs along with associated objects.',
      usage: 'git push <remote> <branch>',
      fn: (remote, branch) => `Pushing to ${remote}/${branch}...`
    },
    pull: {
      description: 'Fetch from and merge with another repository or a local branch.',
      usage: 'git pull <remote> <branch>',
      fn: (remote, branch) => `Pulling from ${remote}/${branch}...`
    },





    
  }
  

  



const GitConsole = () => {

  const welcomeMessage = (

      <TypeAnimation
        cursor={true}
        sequence={[
          'Welcome to the Git Console!',
          1000,
          'Type "help" to see a list of commands.',
          1000,

        ]}
      />
    )

    return (



      <Terminal
        commands={commands}
        welcomeMessage={welcomeMessage}

        promptLabel={<Icon icon="game-icons:running-ninja" width='30px' color="green" className='brightness-200' />}
        promptLabelStyle={{ color: 'green' }}
        errorText={'Error!'}
        style={{
          height: '600px',
          width: '100vw',
          backgroundColor: 'black',
          fontSize: '1.2em'
        }}
      />
    )
  }

export default GitConsole

