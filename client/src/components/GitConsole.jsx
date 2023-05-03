import React, { Component } from 'react'
import Terminal from 'react-console-emulator'
import {Icon} from '@iconify/react';

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


    return (
      <Terminal
        commands={commands}
        welcomeMessage={'In the art of Git, the commit is your ally, the branch your friend, and the merge your teacher. May your code flow like water, and your merges be conflict-free.'}
        promptLabel={<Icon icon="game-icons:running-ninja" width='30px' color="green" />}
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

