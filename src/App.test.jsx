import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from './App'

describe('Testes do Componente Principal (App)', () => {
  test('deve renderizar o título e o contador do Vite', () => {
    render(<App />)

    expect(screen.getByText(/Get started/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Count is 0/i })).toBeInTheDocument()
  })

  test('deve mostrar a identificação do aluno e as etapas da esteira', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Kauan Eduardo' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Código' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Deploy' })).toBeInTheDocument()
  })

  test('deve incrementar o contador ao clicar', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /Count is 0/i }))

    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeInTheDocument()
  })

  test('deve validar um teste matemático simples', () => {
    expect(5 + 5).toBe(10)
  })
})
