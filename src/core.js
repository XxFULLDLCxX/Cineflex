export const formatCPF = (CPF) => CPF.replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4').replace(/\.?-$/, '');
