export function ErrorComponent({ error }: { error: Error | null }) {
  return <p>{error?.message}</p>;
}
