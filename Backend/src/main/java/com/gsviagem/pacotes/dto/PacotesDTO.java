package com.gsviagem.pacotes.dto;

import com.gsviagem.pacotes.entities.Pacotes;

public class PacotesDTO {
	
	private Long IdPacotes;
	private String Origem;
	private String Destino;
	private float Preco;

	
	public PacotesDTO(){
	}


	public PacotesDTO(Long idPacotes, String origem, String destino, float preco, String dataIda, String dataVolta) {
		this.IdPacotes = idPacotes;
		this.Origem = origem;
		this.Destino = destino;
		this.Preco = preco;
		
	}

	public PacotesDTO(Pacotes pacotes) {
		IdPacotes = pacotes.getIdPacotes();
		Origem = pacotes.getOrigem();
		Destino = pacotes.getDestino();
		Preco = pacotes.getPreco();
		
	}


	public Long getIdPacotes() {
		return IdPacotes;
	}


	public void setIdPacotes(Long idPacotes) {
		IdPacotes = idPacotes;
	}


	public String getOrigem() {
		return Origem;
	}


	public void setOrigem(String origem) {
		Origem = origem;
	}


	public String getDestino() {
		return Destino;
	}


	public void setDestino(String destino) {
		Destino = destino;
	}


	public float getPreco() {
		return Preco;
	}


	public void setPreco(float preco) {
		Preco = preco;
	}


	
}
