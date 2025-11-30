import './checkout.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Checkout() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpfCnpj: '',
        endereco: '',
        numero: '',
        complemento: '',
        cep: '',
        cidade: '',
        uf: '',
        pais: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aqui você poderia validar os campos se necessário
        console.log('Dados do formulário:', formData)
        
        // Redireciona para a página de sucesso
        navigate('/success')
    }

    const handleClear = () => {
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            cpfCnpj: '',
            endereco: '',
            numero: '',
            complemento: '',
            cep: '',
            cidade: '',
            uf: '',
            pais: ''
        })
    }

    const handleExit = () => {
        navigate('/')
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h1 className="checkout-title">FORMULÁRIO DE COMPRA</h1>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <input
                        type="text"
                        name="nome"
                        placeholder="NOME COMPLETO"
                        value={formData.nome}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="E-MAIL"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />

                    <input
                        type="tel"
                        name="telefone"
                        placeholder="(XX) XXXXX-XXXX"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />

                    <input
                        type="text"
                        name="cpfCnpj"
                        placeholder="CPF OU CNPJ"
                        value={formData.cpfCnpj}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />

                    <div className="form-row">
                        <input
                            type="text"
                            name="endereco"
                            placeholder="ENDEREÇO"
                            value={formData.endereco}
                            onChange={handleChange}
                            className="form-input form-input-wide"
                            required
                        />
                        <input
                            type="text"
                            name="numero"
                            placeholder="NÚMERO"
                            value={formData.numero}
                            onChange={handleChange}
                            className="form-input form-input-narrow"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            name="complemento"
                            placeholder="COMPLEMENTO"
                            value={formData.complemento}
                            onChange={handleChange}
                            className="form-input form-input-wide"
                        />
                        <input
                            type="text"
                            name="cep"
                            placeholder="CEP"
                            value={formData.cep}
                            onChange={handleChange}
                            className="form-input form-input-narrow"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="cidade"
                        placeholder="CIDADE"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />

                    <div className="form-row">
                        <input
                            type="text"
                            name="uf"
                            placeholder="UF"
                            value={formData.uf}
                            onChange={handleChange}
                            className="form-input"
                            maxLength="2"
                            required
                        />
                        <input
                            type="text"
                            name="pais"
                            placeholder="PAÍS"
                            value={formData.pais}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button 
                            type="button" 
                            className="btn-secondary"
                            onClick={handleExit}
                        >
                            SAIR
                        </button>
                        <button 
                            type="button" 
                            className="btn-secondary"
                            onClick={handleClear}
                        >
                            LIMPAR
                        </button>
                        <button 
                            type="submit" 
                            className="btn-primary"
                        >
                            CONFIRMAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout