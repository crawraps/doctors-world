import * as React from 'react'

type State = {
  patient: 'adult' | 'kid' | null
}

const defaultState: State = {
  patient: null,
}

type Action = { type: 'setAdult' } | { type: 'setKid' } | { type: 'setNull' }
type Dispatch = (action: Action) => void
type ProviderProps = { children: React.ReactNode }

const PatientContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

function PatientReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setAdult':
      return { patient: 'adult' } as State
    case 'setKid':
      return { patient: 'kid' } as State
    case 'setNull':
      return { patient: null } as State
    default:
      return { patient: null } as State
  }
}

export function PatientProvider({ children }: ProviderProps) {
  const [state, dispatch] = React.useReducer(PatientReducer, defaultState)
  const value = { state, dispatch }
  return <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
}

export function usePatient() {
  const context = React.useContext(PatientContext)

  if (context === undefined) {
    throw new Error('usePatient must be used within a PatientProvider')
  }

  return context
}
