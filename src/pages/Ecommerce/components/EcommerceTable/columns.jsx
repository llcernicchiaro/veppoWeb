import React from 'react';
import { Button } from 'antd';
import { Link } from 'umi';

export default [
  {
    title: 'Empresa',
    dataIndex: 'empresa',
    align: 'center',
  },
  {
    title: 'Linha',
    dataIndex: 'linha',
  },
  {
    title: 'Modalidade',
    dataIndex: 'modalidade',
    align: 'center',
  },
  {
    title: 'Hora',
    dataIndex: 'hora',
    align: 'center',
  },
  {
    title: 'Assentos',
    dataIndex: 'assentos',
    align: 'center',
    render: text => <strong>{text}</strong>,
  },
  {
    title: 'Valor s/ Seguro',
    dataIndex: 'valorSemSeg',
    align: 'center',
  },
  {
    title: 'Valor c/ Seguro',
    dataIndex: 'valorComSeg',
    align: 'center',
  },
  {
    title: 'Valor Promocional',
    dataIndex: 'valorComSeg',
    align: 'center',
  },
  {
    title: 'Tempo Estimado',
    dataIndex: 'tempo',
    align: 'center',
  },
  {
    title: '',
    render: bus => (
      <Link to={`/buy?id=${bus.id}`}>
        <Button type="primary">Comprar</Button>
      </Link>
    ),
  },
];
