"use client";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  EditItem,
  Input,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
const mock = {
  title: "Test title",
  variant: "base",
  items: [],
};
export const CardsEditModal = () => {
  const [count, setCount] = useState(0);
  const [hasTemplate, setHasTemplate] = useState(false);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Edit Cards</CardTitle>
        <CardDescription>There you can edit Cards content</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Label>Select card variant</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Variant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="base">Base</SelectItem>
              <SelectItem value="horizontal">Horizontal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="template"
            checked={hasTemplate}
            onCheckedChange={() => setHasTemplate(!hasTemplate)}
          />
          <Label htmlFor="template">Есть темплейт</Label>
        </div>
        {hasTemplate && (
          <div className="flex gap-2 items-center">
            <Label>Выбор темплейта</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Темплейт" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="base">Base</SelectItem>
                <SelectItem value="horizontal">Horizontal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-3">
          <Input label="Title RU" type="text" />
          <Input label="Title KZ" type="text" />
        </div>
        <Button onClick={() => setCount(count + 1)} className="w-full">
          Add new Card
        </Button>
        <ScrollArea className="h-[320px] rounded-md border p-4 ">
          {new Array(count).fill("0").map((_, idx) => (
            <EditCardItem idx={idx} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

const EditCardItem = ({ idx }: { idx: number }) => {
  return (
    <EditItem
      buttons={
        <>
          <Button size={"sm"}>Save</Button>
          <Button size={"sm"}>Delete</Button>
        </>
      }
      title={"Card" + idx + 1}
    >
      <div className="flex flex-col md:flex-row gap-3">
        <Input label="Card title  RU" type="text" />
        <Input label="Card title KZ" type="text" />
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <Input label="Content RU" type="text" />
        <Input label="Content KZ" type="text" />
      </div>
      <Input type="file" label="Image" />
    </EditItem>
  );
};
