import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explore" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/39681555?s=460&u=9f9b2fa0439e6ee0c97dcb3698833b2bba4e2548&v=4"
          alt="Renan Lima"
        />
        <div>
          <strong>GitReactWithTSX</strong>
          <p>
            Primeiro projeto com React com Typescript, consumindo a API do
            Github
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/39681555?s=460&u=9f9b2fa0439e6ee0c97dcb3698833b2bba4e2548&v=4"
          alt="Renan Lima"
        />
        <div>
          <strong>GitReactWithTSX</strong>
          <p>
            Primeiro projeto com React com Typescript, consumindo a API do
            Github
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/39681555?s=460&u=9f9b2fa0439e6ee0c97dcb3698833b2bba4e2548&v=4"
          alt="Renan Lima"
        />
        <div>
          <strong>GitReactWithTSX</strong>
          <p>
            Primeiro projeto com React com Typescript, consumindo a API do
            Github
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
