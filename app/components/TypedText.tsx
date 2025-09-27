'use client'

import React from 'react'
import { ReactTyped } from 'react-typed'
import { useState } from 'react';

export default function TypedText() {
  return (
    <div>
        <ReactTyped strings={["Heya! I'm Quinn", "Welcome to my creativity cave..."]} typeSpeed={30} />
    </div>
  )
}
