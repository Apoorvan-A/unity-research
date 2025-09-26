import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  FileText, 
  Database, 
  FolderOpen, 
  Users, 
  Calendar, 
  ExternalLink,
  Download,
  Heart,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ResearchItem {
  id: string;
  title: string;
  description: string;
  type: "paper" | "dataset" | "project";
  authors: { name: string; avatar?: string; affiliation?: string }[];
  tags: string[];
  createdAt: string;
  status?: "active" | "completed" | "draft";
  metrics?: {
    views?: number;
    downloads?: number;
    citations?: number;
    likes?: number;
    comments?: number;
  };
  collaborators?: number;
}

interface ResearchCardProps {
  item: ResearchItem;
  showActions?: boolean;
  compact?: boolean;
  onView?: () => void;
  onCollaborate?: () => void;
  onDownload?: () => void;
}

const typeIcons = {
  paper: FileText,
  dataset: Database,
  project: FolderOpen,
};

const statusColors = {
  active: "bg-accent text-accent-foreground",
  completed: "bg-primary text-primary-foreground", 
  draft: "bg-muted text-muted-foreground",
};

export function ResearchCard({ 
  item, 
  showActions = true, 
  compact = false,
  onView,
  onCollaborate,
  onDownload
}: ResearchCardProps) {
  const IconComponent = typeIcons[item.type];

  return (
    <Card className={cn(
      "group hover:shadow-card transition-all duration-300 hover:scale-[1.02] bg-gradient-card",
      compact ? "h-auto" : "h-full"
    )}>
      <CardHeader className={cn("space-y-3", compact && "pb-3")}>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <IconComponent className="h-5 w-5 text-primary" />
            <Badge variant="outline" className="text-xs capitalize">
              {item.type}
            </Badge>
            {item.status && (
              <Badge className={cn("text-xs", statusColors[item.status])}>
                {item.status}
              </Badge>
            )}
          </div>
          {item.collaborators && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Users className="h-3 w-3 mr-1" />
              {item.collaborators}
            </div>
          )}
        </div>

        <div>
          <h3 className={cn(
            "font-semibold group-hover:text-primary transition-colors line-clamp-2",
            compact ? "text-sm leading-5" : "text-base leading-6"
          )}>
            {item.title}
          </h3>
          <p className={cn(
            "text-muted-foreground mt-2 line-clamp-3",
            compact ? "text-xs" : "text-sm"
          )}>
            {item.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className={cn("space-y-4", compact && "py-3")}>
        {!compact && (
          <div className="flex items-center space-x-3">
            {item.authors.slice(0, 3).map((author, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback className="text-xs">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-xs">
                  <p className="font-medium text-foreground">{author.name}</p>
                  {author.affiliation && (
                    <p className="text-muted-foreground">{author.affiliation}</p>
                  )}
                </div>
              </div>
            ))}
            {item.authors.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{item.authors.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, compact ? 2 : 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {item.tags.length > (compact ? 2 : 4) && (
            <Badge variant="outline" className="text-xs">
              +{item.tags.length - (compact ? 2 : 4)}
            </Badge>
          )}
        </div>

        {item.metrics && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              {item.metrics.views && (
                <span>{item.metrics.views} views</span>
              )}
              {item.metrics.downloads && (
                <span>{item.metrics.downloads} downloads</span>
              )}
              {item.metrics.citations && (
                <span>{item.metrics.citations} citations</span>
              )}
            </div>
            <div className="flex items-center space-x-3">
              {item.metrics.likes && (
                <div className="flex items-center space-x-1">
                  <Heart className="h-3 w-3" />
                  <span>{item.metrics.likes}</span>
                </div>
              )}
              {item.metrics.comments && (
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{item.metrics.comments}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>

      {showActions && (
        <CardFooter className={cn("pt-0", compact && "pb-3")}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(item.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center space-x-2">
              {onDownload && (
                <Button variant="ghost" size="sm" onClick={onDownload}>
                  <Download className="h-4 w-4" />
                </Button>
              )}
              {onCollaborate && item.type === "project" && (
                <Button variant="outline" size="sm" onClick={onCollaborate}>
                  <Users className="h-4 w-4 mr-1" />
                  Join
                </Button>
              )}
              <Button variant="default" size="sm" onClick={onView}>
                <ExternalLink className="h-4 w-4 mr-1" />
                View
              </Button>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}