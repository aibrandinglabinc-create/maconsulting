import SectionHeader from "./SectionHeader";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
} from "@/components/ui/table";

const rows = [
  { source: "Strategic Implementation Retainer", freq: "2 Clients", price: "$11,500/mo", total: "$23,000" },
  { source: "VIP Grant Strategy Day", freq: "1 Engagement", price: "$5,000", total: "$5,000" },
  { source: "Advisory Block (Granted)", freq: "1 Block", price: "$2,000", total: "$2,000" },
];

const RevenueTable = () => (
  <section id="revenue">
    <SectionHeader
      eyebrow="Revenue Math"
      title={<>The Path to $30,000 <em className="italic text-primary">Monthly</em></>}
    />
    <div className="bg-card border border-border shadow-md overflow-hidden">
      <Table>
        <TableHeader className="bg-dark">
          <TableRow className="border-b border-primary-foreground/10 hover:bg-transparent">
            <TableHead className="text-[9px] font-bold tracking-[0.14em] uppercase text-primary-foreground/40 h-11">Revenue Source</TableHead>
            <TableHead className="text-[9px] font-bold tracking-[0.14em] uppercase text-primary-foreground/40 h-11">Frequency</TableHead>
            <TableHead className="text-[9px] font-bold tracking-[0.14em] uppercase text-primary-foreground/40 h-11">Price Point</TableHead>
            <TableHead className="text-[9px] font-bold tracking-[0.14em] uppercase text-primary-foreground/40 h-11 text-right">Total Yield</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="border-b border-border hover:bg-primary/[0.03]">
              <TableCell className="text-[13px] font-semibold text-ink py-3">{row.source}</TableCell>
              <TableCell className="text-xs text-ash py-3">{row.freq}</TableCell>
              <TableCell className="text-xs text-ash py-3">{row.price}</TableCell>
              <TableCell className="text-sm font-bold text-ink py-3 text-right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-primary/[0.06] border-t-2 border-primary">
          <TableRow className="hover:bg-primary/[0.08]">
            <TableCell colSpan={3} className="text-[13px] font-bold text-ink py-3">30-Day Project Total</TableCell>
            <TableCell className="text-right font-serif text-2xl font-bold text-primary py-3">$30,000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </section>
);

export default RevenueTable;
