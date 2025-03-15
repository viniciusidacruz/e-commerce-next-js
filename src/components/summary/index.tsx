export function Summary() {
  return (
    <aside className="bg-white rounded-lg p-4">
      <h2 className="text-lg font-bold">Resumo</h2>

      <div className="flex flex-col gap-4 border-b border-slate-200 mt-4 pb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Items</span>
          <span className="text-sm">4</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="text-sm text-slate-500">Total da compra</span>
        <span className="text-sm font-bold">R$ 100,00</span>
      </div>
    </aside>
  );
}
