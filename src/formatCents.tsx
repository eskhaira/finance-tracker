function formatCents(cents: number) {
  return "$" + (cents / 100).toFixed(2);
}

export default formatCents;
